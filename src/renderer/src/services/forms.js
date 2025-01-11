import { toRaw } from 'vue'

function builddata(data) {
    const formData = {}
    Object.keys(data).forEach(k => formData[k] =  toRaw(data[k]));
    return formData
}

function checkrule(rule, value) {
	let isvalid = true;
	let message = '';

	const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const regexPhone = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
	const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
	const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

	const cnpjValid = cnpj => {
		let b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
		let c = String(cnpj).replace(/[^\d]/g, '');

		if (c.length !== 14) return false;

		if (/0{14}/.test(c)) return false;

		for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
		if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

		for (var j = 0, m = 0; j <= 12; m += c[j] * b[j++]);
		if (c[13] != ((m %= 11) < 2 ? 0 : 11 - m)) return false;

		return true;
	};

	switch (rule) {
		case 'required':
			isvalid = typeof value === 'number' ? true : !!value;
			message = isvalid ? '' : 'Campo obrigatório não informado!';
			break;
		case 'email':
			isvalid = regexEmail.test(value);
			message = isvalid ? '' : 'O Campo precisa ser um e-mail válido!';
			break;
		case 'phone':
			isvalid = regexPhone.test(value);
			message = isvalid ? '' : 'O Campo precisa ser um telefone válido!';
			break;
		case 'cpf':
			isvalid = regexCPF.test(value);
			message = isvalid ? '' : 'O Campo precisa ser um CPF válido!';
			break;
		case 'date':
			isvalid = regexDate.test(value);
			message = isvalid ? '' : 'O Campo precisa ser uma data válida!';
			break;
		case 'cnpj':
			isvalid = cnpjValid(value);
			message = isvalid ? '' : 'Digite um CNPJ válido!';
			break;
		default:
			isvalid = false;
			message = 'Regra de validação não reconhecida!';
			break;
	}

	return {
		isvalid,
		message,
	};
}

function checkform(data, rules) {
	if (rules) {
		const checks = [];
		const messages = [];

		for (let rule in rules) {
			const irules = rules[rule].split('|');
			irules.forEach(r => {
				const check = checkrule(r, data[rule]);
				checks.push(check.isvalid);
			});
		}

		return {
			isvalid: checks.every(v => v == true),
			message: [...new Set(messages)].join(', '),
		};
	}

	return {
		isvalid: true,
		message: '',
	};
}

export default {
    builddata,
    checkform
}
