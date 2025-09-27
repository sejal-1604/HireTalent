const axios = require('axios');

// Test the signup functionality with alternative URL
async function testSignup() {
    const BASE_URL = 'https://cpms-api.vercel.app';
    
    const testData = {
        first_name: 'Test User',
        email: 'test@example.com',
        number: '1234567890',
        password: 'Test@123456'
    };
    
    console.log('Testing signup with alternative URL:', `${BASE_URL}/student/signup`);
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

