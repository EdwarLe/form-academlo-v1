let userList = [];

function addUserToSystem (pName, pMail, pPass, pConfPass) {
    let newUser = {
        name: pName,
        email: pMail,
        password: pPass,
        confirm: pConfPass
    }

    userList.push(newUser)
    localStorageUserList(userList)
}

function getUserList () {
    let storedList = localStorage.getItem("localUserList");
    if(storedList == null) {
        userList = [];
    } else {
        userList = JSON.parse(storedList)
    }
    return userList
}

function localStorageUserList (pList) {
    localStorage.setItem("localUserList", JSON.stringify(pList))
}