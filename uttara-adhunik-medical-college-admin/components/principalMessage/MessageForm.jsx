"use client";

import React, { useState } from "react";

export default function MessageForm({ editingMessage, onSuccess, onCancel }) {
  const [principalName, setPrincipalName] = useState(
    editingMessage?.principalName || "",
  );

  const [message, setMessage] = useState(editingMessage?.message || "");

  const [signatureImage, setSignatureImage] = useState(
    editingMessage?.signatureImage || "",
  );

  const [principalImage, setPrincipalImage] = useState(
    editingMessage?.principalImage || "",
  );

  const [signatureFile, setSignatureFile] = useState(null);
  const [principalFile, setPrincipalFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Image upload failed");
    }

    return data.url;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      let uploadedSignatureImage = signatureImage;
      let uploadedPrincipalImage = principalImage;

      // Upload signature
      if (signatureFile) {
        setUploading(true);
        uploadedSignatureImage = await uploadImage(signatureFile);
      }

      // Upload principal image
      if (principalFile) {
        setUploading(true);
        uploadedPrincipalImage = await uploadImage(principalFile);
      }

      setUploading(false);

      const payload = {
        principalName,
        message,
        signatureImage: uploadedSignatureImage,
        principalImage: uploadedPrincipalImage,
      };

      const isEditing = Boolean(editingMessage?._id);

      const url = isEditing
        ? `/api/${editingMessage._id}`
        : "/api/principal-message";

      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(
        isEditing
          ? "Principal message updated successfully"
          : "Principal message created successfully",
      );

      if (onSuccess) {
        onSuccess(data.data);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
      setUploading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-6 shadow"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        {editingMessage ? "Edit Principal Message" : "Add Principal Message"}
      </h2>

      {error && (
        <div className="rounded-lg bg-red-100 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Principal Name */}
      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Principal Name
        </label>

        <input
          type="text"
          value={principalName}
          onChange={(e) => setPrincipalName(e.target.value)}
          placeholder="Enter principal name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Principal Message
        </label>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter principal message"
          rows={8}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          required
        />
      </div>

      {/* Signature */}
      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Principal Signature
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSignatureFile(e.target.files?.[0] || null)}
          className="w-full rounded-lg border border-gray-300 p-3"
          required={!editingMessage}
        />

        {signatureImage && (
          <div className="mt-3">
            <p className="mb-2 text-sm text-gray-500">Current Signature</p>

            <img
              src={signatureImage}
              alt="Principal signature"
              className="h-28 w-auto rounded border object-contain"
            />
          </div>
        )}
      </div>

      {/* Principal Image */}
      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Principal Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPrincipalFile(e.target.files?.[0] || null)}
          className="w-full rounded-lg border border-gray-300 p-3"
          required={!editingMessage}
        />

        {principalImage && (
          <div className="mt-3">
            <p className="mb-2 text-sm text-gray-500">
              Current Principal Image
            </p>

            <img
              src={principalImage}
              alt="Principal"
              className="h-48 w-48 rounded-lg object-cover"
            />
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {uploading
            ? "Uploading Images..."
            : loading
              ? "Saving..."
              : editingMessage
                ? "Update"
                : "Save"}
        </button>

        {editingMessage && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
