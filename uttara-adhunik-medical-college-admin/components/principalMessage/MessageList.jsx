"use client";

import React from "react";

export default function MessageList({ messages, loading, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow">
        Loading principal messages...
      </div>
    );
  }

  if (!messages || messages.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow">
        <p className="text-gray-500">No principal message found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((item) => (
        <div key={item._id} className="rounded-xl bg-white p-6 shadow">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Principal Image */}
            <div className="shrink-0">
              <img
                src={item.principalImage}
                alt={item.principalName}
                className="h-48 w-48 rounded-lg object-cover"
              />
            </div>

            {/* Information */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">
                {item.principalName}
              </h3>

              <p className="mt-3 whitespace-pre-line text-gray-600">
                {item.message}
              </p>

              {/* Signature */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-medium text-gray-500">
                  Signature
                </p>

                <img
                  src={item.signatureImage}
                  alt="Signature"
                  className="h-20 w-auto object-contain"
                />
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => onEdit(item)}
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => onDelete(item._id)}
                  className="rounded-lg bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
