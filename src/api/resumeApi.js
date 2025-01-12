const API_URL = process.env.REACT_APP_API_URL;
const API_SECRET = process.env.REACT_APP_API_SECRET;

export const fetchResumeData = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_SECRET}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching resume data:', error);
        throw error;
    }
};
