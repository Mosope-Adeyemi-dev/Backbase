import Joi from "joi";

export const signup = Joi.object({
    firstname: Joi.string().required().label('Firstname'),
    lastname: Joi.string().required().label('Lastname'),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(6).required().label('Password')   
})

export const login = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password')
}) 

export const verifyEmail = Joi.object({
    email: Joi.string().email().required().label('Email'),
    token: Joi.string().required().label('Token')
}) 

export const resetPassword = Joi.object({
    email: Joi.string().email().required().label('Email'),
    token: Joi.string().required().label('Token'),
    newPassword: Joi.string().required().label('newPassword')
}) 

export const requestVerificationOtp = Joi.object({
    email: Joi.string().email().required().label('Email'),
}) 