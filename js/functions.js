export const truncateText = (str, truncationSpecification)=>{
    if(str.length > 30){
        const truncatedText = str.slice(0, truncationSpecification) + "..."
        return truncatedText
    }
    return str;
}