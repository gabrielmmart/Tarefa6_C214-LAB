const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Iago",
        email: "iago.luiz@ges.inatel.br",
        senha: "123456789"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        email: "iago.luiz@ges.inatel.br",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro email', () => {
    const result = Validation.create({
        nome: "gabriel",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro senha', () => {
    const result = Validation.create({
        nome: "gabriel",
        email: "gabriel.medeiros@ges.inatel.br"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem parâmetros', () => {
    const result = Validation.create({
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem parâmetros', () => {
    const result = Validation.update({

    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - duplicado', () => {
    const result = Validation.update({
        nome: "gabriel",
        email: "gabriel.medeiros@ges.inatel.br",
        senha: "123456"
    });
    expect(result.name).toEqual(Constants.ErrorDuplicate.name);
});

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Ramon Adonis",
        email: "ramon.adonis@gec.inatel.br",
        senha: "999999"
    });
    expect(result).toEqual(undefined);
});