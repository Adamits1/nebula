const validKeys = ["NEBULA123", "KEY456", "ACCESS789"];

function redeemKey() {
  const keyInput = document.getElementById('licenseKey');
  const message = document.getElementById('redeemMessage');
  const key = keyInput.value.trim().toUpperCase();

  if (validKeys.includes(key)) {
    message.classList.remove('hidden');
    message.style.backgroundColor = '#2ecc71';
    message.textContent = '✅ License key valid! Redirecting to dashboard...';
    setTimeout(() => {
      window.location.href = '339xah43bnta04adad3a.html';
    }, 2000);
  } else {
    message.classList.remove('hidden');
    message.style.backgroundColor = '#e74c3c';
    message.textContent = '❌ Invalid license key. Please try again.';
  }
}

function handlePayment() {
  const method = document.getElementById('paymentMethod').value;
  const statusDiv = document.getElementById('paymentStatus');

  if (method) {
    statusDiv.classList.remove('hidden');
    statusDiv.textContent = `🚧 Our ${method} payment system is currently down. Please check back later.`;
  } else {
    statusDiv.classList.remove('hidden');
    statusDiv.textContent = '⚠️ Please select a payment method.';
  }
}

