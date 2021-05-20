export default function validateInfo(values){
    let errors = {};
    console.log("error check",values)

    if(!values.phoneNo){
        errors.phoneNo = "Phone Number Required"
    }else if(!(values.phoneNo.toString().length === 10)){
        errors.phoneNo = "Enter a valid phone Number"
    }

    if(!values.pincode){
        errors.pincode = "Pincode Required"
    }else if(!(values.pincode.length === 6)){
        errors.pincode = "Enter a valid Pincode"
    }

    if(!values.address.trim()){
        errors.address = "Enter a Valid address"
    }

    console.log("errors",errors)

    return errors;
}