export default function validateInfo(values){
    let errors = {};
    console.log(values.phoneNo.length)

    if(!values.username.trim()){
        errors.username = "Username required"
    }

    if(!values.email){
        errors.email = "Email Required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.phoneNo){
        errors.phoneNo = "Phone Number Required"
    }else if(!(values.phoneNo.length === 10)){
        errors.phoneNo = "Enter a valid phone Number"
    }

    if(!values.password){
        errors.password = 'Password is required';
    }else if(values.password.length < 6){
        errors.password = 'Password need to 6 characters or more'
    }

    if(!values.password2){
        errors.password2 = 'Password is required'
    }else if(values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }

    return errors;
}