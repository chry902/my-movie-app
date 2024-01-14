const Postlogin = async (data, url, isGet) => {
  console.log("data", data, "url", url, "isget", isGet);
  //promis
  try {
    //chiamata post
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      const accessToken = responseData.access_token;
      console.log("response", responseData, "accesstoken", accessToken);
      return {
        success: true,
        accessToken: accessToken,
        message: "Chiamata andata a buon fine",
        typeOfGet: isGet,
      };
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message;
      return {
        success: false,
        accessToken: null,
        message: errorMessage,
        typeOfGet: isGet,
      };
    }
  } catch (error) {
    console.log("Si è verificato un errore:", error.message, isGet);
    return {
      success: false,
      accessToken: null,
      message: "Si è verificato un errore : " + error.message,
      typeOfGet: isGet,
    };
  }
};

async function fetchData(url,JWT_TOKEN) {
  try {
    const response = await fetch(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${JWT_TOKEN}`,
        },
      }
    );
      if (!response.ok) {
      throw new Error(
        `GET response! stato: ${response.status}`
      );
    }
    
    const data = await response.json();
    console.log(data, "get");
    return data;
  } catch (error) {
    console.error("Error***:", error);
  }
}

export { Postlogin, fetchData };
