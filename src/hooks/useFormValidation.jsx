import { useState } from "react"

const useFormValidation = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        name: '',
        message: ''
    })
    
    const [errors, setErrors] = useState({})

    const validators = {
        email: (value) => {
            if (!value.trim()) return "Email is required."
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) return "Invalid email address."
            return ""
        },
        name: (value) => {
            if (!value.trim()) return "Name is required."
            return ""
        },
        message: (value) => {
            if (!value.trim()) return "Message is required."
            if (value.length < 10) return "Message must be at least 10 characters."
            return ""
        },
    } 
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValue((prevValue) => ({ ...prevValue, [name]: value }))

    }
    
    const validateForm = () => {
        const newErrors = {}
        for (const field in formValue) {
            const error = validators[field](formValue[field])
            if (error) newErrors[field] = error
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    
    return {
        formValue, 
        setFormValue, 
        errors,
        handleChange,
        validateForm
    }
}

export default useFormValidation