import {defineSupportCode} from 'cucumber'


defineSupportCode(({registerHandler}) =>{
    
    registerHandler('BeforeFeature', async()=>{
        console.log('Executing before feature !!');
    });

    registerHandler('AfterFeature', async()=>{
        console.log('Executing after feature !!');
    });



});