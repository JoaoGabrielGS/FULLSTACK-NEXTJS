import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import React from "react";

function useForm({ initialValues }) {
    const [values, setValues] = React.useState(initialValues);

    return {
        values,
        handleChange(event) {
            const { name, value } = event.target;
            setValues({
                ...values,
                [name]: value,
            })
        }
    }
}

export default function NewsletterScreen() {

    const form = useForm({
        initialValues: {
            email: '',
        }
    });

    return (
        <Box styleSheet={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log('Dados do formulários');

                // Validar

                if (!form.values.email.includes('@')) {
                    alert('Você precisa informar um email válido!')
                    return;
                }

                // Enviar para o servidor o email da pessoa
                fetch('/api/newsletter/optin', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(form.values),
                }).then(async (res) => {
                    console.log(await res.json());
                })

            }}>
                <Box styleSheet={{
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '400px',
                    padding: '16px',
                }}>
                    <Image
                        src="https://github.com/joaogabrielgs.png"
                        alt="Eu"
                        styleSheet={{
                            borderRadius: '100%',
                            width: '100px',
                            marginBottom: '16px',
                        }}
                    />
                    <Text variant="heading2">Newsletter</Text>
                    <NewsletterTextField
                        placeholder="Informe seu email"
                        name="email"
                        value={form.values.email}
                        onChange={form.handleChange}
                    />

                    <Box>
                        <Text>Seu email é: {form.values.email}</Text>
                    </Box>

                    <Button
                        fullWidth
                        styleSheet={{
                            marginTop: '16px',
                        }}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

interface NewsletterTextFieldProps {
    placeholder?: string;
    value?: string;
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
    return (
        <Box
            styleSheet={{
                maxWidth: '300px',
                width: '100%',
            }}
        >
            <BaseComponent
                as="input"
                {...props}
                styleSheet={{
                    border: '1px solid rgb(195, 195, 195)',
                    borderRadius: '4px',
                    padding: '8px',
                    width: '100%',
                }}
            />
        </Box>
    )
}