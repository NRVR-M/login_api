
function ApiRequest() {

    async function postJSON(data) {
        try {
            const response = await fetch("https://4dtestapi.dataquest.ch/rest/v2/authentication/login", {

                method: "POST",
                headers:
                {
                    Authorization: `Basic ${process.env.REACT_APP_API_AUTH_CREDENTIALS}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),

            });

            const result = await response.json();
            console.log("Success:", result);
            }
            catch (error) {
            console.error("Error:", error);
            }
    }

    const data = { username: "dqTool", password: "techsupp"};
    postJSON(data);

}
export default ApiRequest;
