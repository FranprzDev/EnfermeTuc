export const elegirSolucionProblema = (sintoma: string): string => {
    switch (sintoma) {
        case 'fiebre':
            return 'Puedes probar tomando paracetamol';
        case 'gripe':
            return 'Puedes probar tomando Antigripal';
        case 'riBer':
            return 'No hay nada que podamos hacer...';
        case 'tos':
            return 'Puedes probar tomando Jarabe';
        default:
            return 'No se encontro solucion';
    }
}