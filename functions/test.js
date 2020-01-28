exports.handler = function(event,context,callback){
    const {name} = JSON.parse(event.body)
    if(name === 'geralt'){
    callback(null,{
        statusCode:200,
        body:JSON.stringify({msg:`hello there ${name}`}),
    })
} else {
    callback(new Error('who you'))
}

}