
import React, { Component } from 'react'
import {EditAndValidate,create_UUID} from './Helper/Utility'


const INIT_STATE = {
    ARTICLE: []
}


export default (state = INIT_STATE, { type, payload }) => {


    switch (type) {
        case 'ADD_ARTICLE':
            return { ...state, ARTICLE: [...state.ARTICLE, { ...payload, id: create_UUID() }] };
        case 'DELETE_ARTICLE':
            return {
                ...state, ARTICLE: [...state.ARTICLE.filter(elem => {
                    return elem.id !== payload
                })]
            };
            case 'UPDATE_ARTICLE':
            console.log("check payload ",payload, state.ARTICLE)
            let keys = Object.keys(payload)
            let obj = EditAndValidate(payload, keys)
            console.log("check obj ", obj)
            for (let i = 0; i < state.ARTICLE.length; i++) {

                const element = state.ARTICLE[i];
                if(element.id == payload.id){
                    state.ARTICLE[i] = {...state.ARTICLE[i], ...obj , id: obj.id}
                   
                    return {...state, ARTICLE: [...state.ARTICLE] }
                }
            }
           return {...state}
                
            
        default:
            return state
    }
}



