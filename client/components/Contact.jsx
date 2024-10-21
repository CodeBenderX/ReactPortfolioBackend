/*File Name: ReactPortfolio 
  Student’s Name: Angelo Tiquio 
  StudentID: 301343280
  Date: September 21, 2024*/

import React, { useState } from 'react';

/* 
  =============================
  JavaScript Functions Section
  =============================
*/
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent!'); // Temporary action instead of navigation
    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <h2>Please Leave me a Message</h2>
      <p>Contact me for Software Development, Web Development, and other inquiries</p>
      <p>You can also reach me  at <br />Email: angelo.tiquio@outlook.com <br />Phone: +1 (437)239-8553</p>
      <form className="contactContainer" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th><label className="formLabels" htmlFor="firstName">First Name*</label></th>
              <td>
                <input
                  type="text"
                  className="inputColor"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  required
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <th><label className="formLabels" htmlFor="lastName">Last Name*</label></th>
              <td>
                <input
                  type="text"
                  className="inputColor"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  required
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="email">Email*</label></th>
              <td>
                <input
                  type="email"
                  className="inputColor"
                  name="email"
                  id="email"
                  value={formData.email}
                  required
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <th><label htmlFor="phone">Phone*</label></th>
              <td>
                <input
                  type="tel"
                  className="inputColor"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  required
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" id="message">
                <label htmlFor="message">Message*:</label><br />
                <textarea
                  className="inputColor"
                  cols="130"
                  rows="10"
                  id="message"
                  name="message"
                  value={formData.message}
                  required
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p><strong>Note:</strong><em> By clicking Send Message, you allow Angelo Tiquio to contact you regarding your software engineering needs via call, email, or text. You can opt out at any time by replying 'stop' or clicking the unsubscribe link in emails.</em></p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" className="passData" value="Send Message" />
                <input type="reset" className="passData" value="Clear Data" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
};

export default Contact;
