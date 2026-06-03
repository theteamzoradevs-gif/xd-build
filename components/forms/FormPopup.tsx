"use client";

import React, { useState, useEffect } from "react";

export default function FormPopup() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      {/* Heavy Dark Backdrop Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)'
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Main Card Container (Perfectly Centered Single Column) */}
      <div 
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl z-10"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '28rem',
          backgroundColor: '#FFFFFF',
          borderRadius: '0.75rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          zIndex: 10,
          padding: '2.25rem 2rem 1.75rem 2rem',
          boxSizing: 'border-box'
        }}
      >
        
        {/* Top Feature Badge (Build with Clarity Lap) */}
        <div 
          style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#EAA135',
            color: '#000000',
            fontSize: '11px',
            fontWeight: 'bold',
            padding: '0.35rem 1.25rem',
            borderRadius: '0.375rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap'
          }}
        >
          Build with Clarity
        </div>

        {/* Close Button (Cross) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1.25rem',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#9ca3af'
          }}
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Header Content */}
        <div className="text-center mt-2 mb-5" style={{ textAlign: 'center', marginBottom: '1.25rem', marginTop: '0.5rem' }}>
          <h3 className="text-xl font-bold text-gray-900" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: '0 0 0.25rem 0' }}>
            Get Consultation
          </h3>
          <p className="text-xs text-gray-500" style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 1rem 0' }}>
            Tell us about your project to unlock expert insights.
          </p>
          
          {/* Construction Tagline */}
          <p 
            className="text-sm font-medium text-gray-800" 
            style={{ 
              fontSize: '0.85rem', 
              fontWeight: 500, 
              color: '#1f2937', 
              borderTop: '1px solid #f3f4f6', 
              paddingTop: '0.75rem',
              margin: '0.5rem 0 0 0',
              lineHeight: '1.4'
            }}
          >
            From Blueprint to Reality: Your Vision, Built with Precision.
          </p>
        </div>

        {/* Form Fields */}
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#4b5563', marginBottom: '0.25rem' }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              style={{ width: '100%', padding: '0.65rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem', color: '#1f2937', backgroundColor: '#ffffff', boxSizing: 'border-box' }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#4b5563', marginBottom: '0.25rem' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              style={{ width: '100%', padding: '0.65rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem', color: '#1f2937', backgroundColor: '#ffffff', boxSizing: 'border-box' }}
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#4b5563', marginBottom: '0.25rem' }}>
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              style={{ width: '100%', padding: '0.65rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', fontSize: '0.875rem', color: '#1f2937', backgroundColor: '#ffffff', boxSizing: 'border-box' }}
              required
            />
          </div>

          {/* Button 1: Send Enquiry */}
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#d68711', color: 'white', fontWeight: 500, fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}
          >
            Send Enquiry &rarr;
          </button>
        </form>

        {/* "OR" Divider Section */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '0.85rem 0' }}>
          <div style={{ flexGrow: 1, borderTop: '1px solid #e5e7eb' }}></div>
          <span style={{ flexShrink: 0, margin: '0 0.75rem', fontSize: '10px', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase' }}>OR</span>
          <div style={{ flexGrow: 1, borderTop: '1px solid #e5e7eb' }}></div>
        </div>

        {/* Button 2: Send Email */}
        <div>
          <a
            href="mailto:example@construction.com"
            style={{ 
              width: '100%', 
              backgroundColor: '#050505', // डार्क ग्रीन थीम जो इमेज के कॉल बटन से मिलती है
              color: 'white', 
              fontWeight: 500, 
              fontSize: '0.875rem', 
              padding: '0.75rem 1rem', 
              borderRadius: '0.375rem', 
              textDecoration: 'none', 
              textAlign: 'center', 
              display: 'block', 
              boxSizing: 'border-box' 
            }}
          >
            Send Email
          </a>
        </div>

      </div>
    </div>
  );
}