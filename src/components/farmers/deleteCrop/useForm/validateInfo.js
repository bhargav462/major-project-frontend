export default function validateInfo(values){
    let errors = {};

    console.log(values.images)

    if(!values.cropName.trim()){
        errors.cropName = "Crop Name required"
    }

    if(!values.weight){
        errors.weight = "Weight is Required"
    }

    if(!values.price){
        errors.price = 'Price is required';
    }

    if(!values.description.trim()){
        errors.description = 'Crop Description is required'
    }

    if(!values.address.trim()){
        errors.address = 'Address is required'
    }

    return errors;
}