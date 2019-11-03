


  const baseUrl=
   //"localhost:5001";
   "ei-web-api.azurewebsites.net";

  export const authenticate = formDataObject => {
    
    let url = `https://${baseUrl}/api/useraccount/authenticate`;
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",      
      body: JSON.stringify(formDataObject)
    });     
  };

  export const getUseraccount = () =>{
    let url = `https://${baseUrl}/api/useraccount`;
    return fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache"
    })
    .then(res => res.json());
  }
  
  export const getWirecolor=() => {
    let url = `https://${baseUrl}/api/wirecolor`;
    return fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
      })
      .then(res => res.json());
  }

  