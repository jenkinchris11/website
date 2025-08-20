<template>
  <div class="page container fade-up">
    <h1>Contact</h1>
    <form class="contact-form">
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Message
        <textarea name="message"></textarea>
      </label>
      <button type="submit" class="primary">Send</button>
    </form>
  </div>
</template>

<style scoped>
.page {
  padding: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
}

.contact-form button {
  align-self: center;
  padding: 0.75rem 2rem;
  border: none;
  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover,
.contact-form button:focus {
  background: #333;
}
</style>
