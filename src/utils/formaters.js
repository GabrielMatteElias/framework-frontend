const formataData = (data, nationality = 'br') => {
    if (data) {
        const [ano, mes, dia] = data.split('-');
        if(nationality === 'us') {
            return `${ano}-${mes}-${dia}`
        } else {
        return `${dia}/${mes}/${ano}`
        }
    }
}

const convertMonthToISO = (monthStr) => {
    if (!monthStr) return null;
    return new Date(`${monthStr}-01T00:00:00Z`).toISOString();
};

const formataCpf = (value) => {
    // Remove caracteres não numéricos
    if (value.length <= 11) {
        // Formata CPF (###.###.###-##)

        return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else if (value.length > 11 && value.length <= 14) {
        // Formata CNPJ (##.###.###/####-##)
        return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    } else {
        return value
    }
}

const formataValorVirgula = (valor) => {
    if (valor) {
        if (typeof valor === 'string') {
            if (valor.includes(',')) {
                const valorPonto = valor.replace(',', '.')
                valor = Number(valorPonto)

            }
            valor = Number(valor)
        }
        const numFormatado = valor.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });
        return numFormatado

    }
}

const calcularDiferencaDataEmDias = (data) => {

    const dataRecebida = new Date(data);

    const dataAtual = new Date();

    const diferencaTempo = Math.abs(dataAtual - dataRecebida);

    const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    return diferencaDias
}

const formatNumberByCountry = (value, countryCode = 'US') => {
    const localeMap = {
        BR: 'pt-BR',
        US: 'en-US',
        DE: 'de-DE',
        FR: 'fr-FR',
        ES: 'es-ES',
        IN: 'en-IN',
        JP: 'ja-JP',
        RU: 'ru-RU',
        CN: 'zh-CN',
    };
    const locale = localeMap[countryCode.toUpperCase()] || 'en-US';

    return new Intl.NumberFormat(locale).format(value);
}

const formatNumberShort = (numero, countryCode = 'pt-BR', options = { notation: 'compact'}) => {
    const localeMap = {
        BR: 'pt-BR',
        US: 'en-US',
        DE: 'de-DE',
        FR: 'fr-FR',
        ES: 'es-ES',
        IN: 'en-IN',
        JP: 'ja-JP',
        RU: 'ru-RU',
        CN: 'zh-CN',
    };
    const locale = localeMap[countryCode.toUpperCase()] || 'en-US';

    return new Intl.NumberFormat(locale, options).format(numero);
}

export {
    formataData,
    convertMonthToISO,
    formataCpf,
    formataValorVirgula,
    calcularDiferencaDataEmDias,
    formatNumberByCountry,
    formatNumberShort
}