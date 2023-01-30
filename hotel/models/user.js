class User {


    constructor(firstname, lastname , email , phone , username , password ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.address = "";
        this.nationalId = "";
        this.country = "";
        this.city = "";

      }

    /**
   * @param {string} sth
   */
    set setAddress(sth) {
        return this.address = sth;
    } 
    /**
   * @param {string} sth
   */
    set setNationalId(sth) {
      return this.nationalId = sth;
  } 
  /**
   * @param {string} sth
   */
  set setCountry(sth) {
    return this.country = sth;
} 
/**
   * @param {string} sth
   */
set setCity(sth) {
  return this.city = sth;
} 





}

module.exports = {User}