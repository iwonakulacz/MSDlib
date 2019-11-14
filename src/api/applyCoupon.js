const applyCoupon = couponCode => {
  const token = localStorage.getItem('CLEENG_AUTH_TOKEN') || '';
  const url = ENVIRONMENT_CONFIGURATION.USE_API_MOCK
    ? `https://www.mocky.io/v2/5d95d9a63300007d962f8ce8?mocky-delay=100ms`
    : `${ENVIRONMENT_CONFIGURATION.GB_API_URL}/discounts/`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ couponCode }),
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

export default applyCoupon;
