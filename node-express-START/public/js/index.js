window.addEventListener('load',function(e)
{
    // http://localhost:3000/api/v1/employees

    const url = 'http://localhost:3000/api/v1/employees'

    async function getEmployees()
    {
        const req = await fetch(url)
        const result = await req.text()
        console.log(result)
    }

    getEmployees()
})