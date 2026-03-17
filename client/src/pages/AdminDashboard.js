import React, { useState, useEffect } from 'react';

const AdminDashboard = ({ onLogout }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      onLogout();
      return;
    }
    fetchContacts();
  }, [onLogout]);

  const fetchContacts = async () => {
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/contacts`);
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch contacts. Make sure the server is running.');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`${API_URL}/api/contacts/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        
        if (data.success) {
          setContacts(prevContacts => prevContacts.filter(contact => String(contact._id) !== id));
        } else {
          alert('Failed to delete message');
        }
      } catch (err) {
        console.error('Delete error:', err);
        alert('Failed to delete message');
      }
    }
  };

  if (loading) {
    return (
      <section className="admin-section">
        <div className="container">
          <div className="admin-header">
            <h2>Admin Dashboard</h2>
            <button onClick={onLogout} className="btn-logout">
              <span>🚪</span> Logout
            </button>
          </div>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading messages...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-section">
      <div className="container">
        <div className="admin-header">
          <h2>Contact Messages</h2>
          <button onClick={onLogout} className="btn-logout">
            <span>🚪</span> Logout
          </button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        {contacts.length === 0 ? (
          <p className="no-messages">No messages yet. Contact form submissions will appear here.</p>
        ) : (
          <div className="messages-list">
            {contacts.map((contact) => (
              <div key={contact._id} className="message-card">
                <div className="message-header">
                  <h3>{contact.name}</h3>
                  <span className="message-date">
                    {new Date(contact.dateSubmitted).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <p className="message-email">{contact.email}</p>
                <p className="message-text">{contact.message}</p>
                <button onClick={() => handleDelete(contact._id)} className="btn-delete">
                  <span>🗑️</span> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
