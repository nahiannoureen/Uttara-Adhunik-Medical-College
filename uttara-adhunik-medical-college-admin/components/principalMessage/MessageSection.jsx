"use client";

import { useEffect, useState } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default function MessageSection() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/principal-message", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      console.log("Principal Message API:", data);

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch principal messages");
      }

      // Your API can return either an object or an array.
      const result = data.data;

      if (!result) {
        setMessages([]);
      } else if (Array.isArray(result)) {
        setMessages(result);
      } else {
        setMessages([result]);
      }
    } catch (error) {
      console.error("Fetch principal messages error:", error);
      setError(error.message || "Failed to fetch principal messages");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="space-y-6">
      <MessageForm onSuccess={fetchMessages} />

      {loading && (
        <div className="rounded-lg border p-4">
          Loading principal message...
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && (
        <MessageList messages={messages} onRefresh={fetchMessages} />
      )}
    </section>
  );
}
