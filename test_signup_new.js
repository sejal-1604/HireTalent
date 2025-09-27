const axios = require('axios');

// Test the signup functionality with new user
async function testSignup() {
    const BASE_URL = 'https://cpms-api.vercel.app';
    
    const testData = {
        first_name: 'New Test User',
        email: `test${Date.now()}@example.com`, // Unique email
        number: '9876543210',
        password: 'Test@123456'
    };
    
    console.log('Testing signup with new user:', `${BASE_URL}/student/signup`);
    console.log('Test data:', testData);
    
    try {
        const response = await axios.post(`${BASE_URL}/student/signup`, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Success:', response.data);
    } catch (error) {
        console.log('Error occurred:');
        console.log('Status:', error.response?.status);
        console.log('Status Text:', error.response?.statusText);
        console.log('Data:', error.response?.data);
        console.log('Full error:', error.message);
    }
}

testSignup();

