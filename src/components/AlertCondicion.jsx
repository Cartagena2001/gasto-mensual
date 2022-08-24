export const AlertaCondicion = (presupuesto, restante) => {
    let clase;
    if(presupuesto / 4 > restante){
        clase = 'p-4 text-red-700 border-l-4 border-red-700 bg-red-50';
    }else if(presupuesto / 2 > restante){
        clase = 'p-4 border-l-4 text-amber-700 bg-amber-50 border-amber-700';
    }else{
        clase = 'p-4 text-green-700 border-l-4 border-green-700 bg-green-50';
    }
    return clase;
}