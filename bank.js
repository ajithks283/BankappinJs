class Bank {

    static getAccountDetails() {


        var accountDetails = {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1001: { acno: 1001, name: "usertwo", balance: 6000, password: "user2" },
            1002: { acno: 1002, name: "userthree", balance: 15000, password: "user3" },
            1003: { acno: 1003, name: "userfour", balance: 45000, password: "user4" },
            1004: { acno: 1004, name: "userfive", balance: 2300, password: "user5" },
        }
        return accountDetails;
    }

    static authenticateUser(accno, password) {
        let data = Bank.getAccountDetails();
        if (accno in dclass Bank {

    static getAccountDetails() {


        var accountDetails = {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1001: { acno: 1001, name: "usertwo", balance: 6000, password: "user2" },
            1002: { acno: 1002, name: "userthree", balance: 15000, password: "user3" },
            1003: { acno: 1003, name: "userfour", balance: 45000, password: "user4" },
            1004: { acno: 1004, name: "userfive", balance: 2300, password: "user5" },
        }
        return accountDetails;
    }

    static authenticateUser(accno, password) {
        let data = Bank.getAccountDetails();
        if (accno in data) {
            if (password == data[accno]["password"]) {
                return 0;//valid credential
            }
            else {
                return 1;//invalid password
            }


        }
        else {
            return -1//invalid accno
        }
    }
    //access using class name becouse of static 
    static login() {
        let accnom = document.querySelector("#acno").value;//1000
        let passw = document.querySelector("#pwd").value;
        // alert(passw)
        // alert("inside login")
        let data = Bank.getAccountDetails();
        //console.log(data);
        if (accnom in data) {
            if (passw == data[accnom]["password"]) {
                alert("authentication success")
                window.location.href = "userhome.html";
            }
            else {
                alert("invalid password")
            }
            //     alert("user exist")
            // }
            // else {
            //     alert("ther is no user")
            // }

        }
        else {
            alert("invalid account number")
        }

    }
    static deposit() {
        // alert("inside");
        let accno = document.querySelector("#acno").value;//1000
        let amt = document.querySelector("#amt").value;//1000  it is a string value so convert it in line 69
        let pwd = document.querySelector("#pasw").value;
        let user = Bank.authenticateUser(accno, pwd)
        let data = Bank.getAccountDetails();
        if (user == 0) {
            data[accno]["balance"] += Number(amt)
            alert("available bal+" + data[accno]["balance"])

        }
        else if (user == 1) {
            alert("invalid password")
        }
        else {
            alert("invalid accno")
        }
        //alert(user);
    }
    static withdraw() {
        let accno = document.querySelector("#acno").value;//1000
        let amt = document.querySelector("#amt").value;//1000  it is a string value so convert it in line 69
        let pwd = document.querySelector("#pasw").value;
        let user = Bank.authenticateUser(accno, pwd);
        let data = Bank.getAccountDetails();
        if (user == 0) {
            if (amt > data[accno]["balance"]) {
                alert("insufficient balance")
            }
            else {
                data[accno]["balance"] -= Number(amt);
                alert("available balance"+data[accno]["balance"])
            }
        }
        else if (user == 1) {
            alert("invalid password")
        }
        else {
            alert("invalid accno")
        }

    }

}