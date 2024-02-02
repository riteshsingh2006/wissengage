export const inputFormElements=[
    {
        name:"Name", label:"Name", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:12
    },
    {
        name:"email",type:"email", label:"Email Id", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:12
    },
    {
        name:"department", type:"radio", label:"Department", 
        options: [
            { "label": "Tech", "value": "tech" },
            { "label": "HR", "value": "hr" },
            { "label": "Operations", "value": "operation" },
            { "label": "Finance", "value": "finance" },
            { "label": "Support", "value": "support" },
            { "label": "Others", "value": "others" },
          ],
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }
]