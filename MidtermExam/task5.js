class ValidationError extends Error {
    constructor(fields) {
        super();
        this.fields = fields;
    }
}
function validateSchema(data, schema) {
    //Code Here
    const invalidFields = [];

    for (const field in schema) {
        const expectedType = schema[field];
        const value = data[field];
        if (!(field in data)) {
            invalidFields.push(field);
            continue;
        }
        if (typeof value !== expectedType) {
            invalidFields.push(field);
        }
    }

    if (invalidFields.length > 0) {
        throw new ValidationError(invalidFields);
    }
}
function safeValidate(data, schema) {
    //Code Here
    try {
        validateSchema(data, schema);
    } catch (error) {
        if (error instanceof ValidationError) {
            return error.fields.join(', ');
        }
        throw error;
    }
}
// Test Code
const userSchema = { name: 'string', age: 'number', active: 'boolean' };
const userData = { name: 'Alice', age: 'thirty', active: 1 };
console.log(safeValidate(userData, userSchema));