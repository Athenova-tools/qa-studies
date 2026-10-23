# Prompt — Página de Donativos do Projeto com Integração PayPal (pt-PT)

## 1. Objetivo do Projeto

Criar uma página de donativos moderna, profissional e responsiva, em **português de Portugal**, que permita aos visitantes apoiar financeiramente um projeto digital independente.

A página deve permitir doações para uma conta PayPal específica, com montantes predefinidos ou valor livre introduzido pelo utilizador.

Deve transmitir confiança, transparência e agradecimento a qualquer contribuição, independentemente do valor. Nome do projeto: `[PROJECT_NAME]`.

## 2. Funcionalidade de Donativos

### Montantes predefinidos

Apresentar opções selecionáveis, por exemplo:

- €2 — Pequena contribuição
- €5 — Apoiante
- €10 — Colaborador do projeto
- €25 — Campeão do projeto
- €50 — Apoiante principal
- Valor livre — introduzir qualquer montante

Os valores devem ser configuráveis e fáceis de alterar. Apenas um montante predefinido pode estar selecionado de cada vez; escolher "valor livre" ativa o campo de entrada.

### Valor livre

Campo numérico para o montante à escolha do doador:

- Moeda por omissão: **EUR (€)**
- Validar antes de redirecionar para o PayPal
- Rejeitar vazio, zero, negativo, não numérico e valores abaixo do mínimo configurável
- Mostrar claramente o montante selecionado antes da saída para o PayPal
- **Nunca** cobrar automaticamente nem recolher dados de pagamento no site

### Integração PayPal

- Conta PayPal do projeto: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`
- Moeda: `EUR`
- Montantes e mínimo: configuráveis

Usar uma integração oficial suportada (PayPal Donate, se disponível para a conta, ou outra solução oficial do PayPal Checkout que permita definir o montante).

Fluxo obrigatório:

1. Selecionar montante → 2. Mostrar resumo da doação → 3. Redirecionar/abrir a interface oficial do PayPal → 4. O doador conclui ou cancela → 5. Retorno a página de sucesso/cancelamento, quando suportado.

**Proibido:** simular pagamentos bem-sucedidos ou mostrar confirmação antes de o PayPal confirmar. **Proibido:** expor credenciais secretas no frontend. Verificar previamente as capacidades reais da integração escolhida (o link PayPal.me não serve para todos os casos).

## 3. Design da Página

Layout limpo, tipografia profissional, espaçamento generoso e identidade visual consistente com o projeto existente (reutilizar o design system atual se existir).

### A. Hero

Título: **"Apoia o Projeto. Ajuda-o a Crescer."**

Texto de apoio: *"Cada contribuição ajuda-nos a melhorar, manter e expandir este projeto. Escolhe um valor que faça sentido para ti e ajuda-nos a continuar a construir algo valioso."*

CTA primário: **"Apoiar o Projeto"**

### B. Seletor de donativo

Cartões/botões visualmente distintos, cada um com montante, descrição curta, estado selecionado claro e interação acessível + campo de valor livre + botão proeminente **"Continuar com o PayPal"**.

### C. Porque o teu apoio importa

Ex.: desenvolvimento de novas funcionalidades, manutenção e melhorias, custos de alojamento, criação de ferramentas adicionais. Só afirmar despesas ou compromissos específicos se forem verdadeiros e aprovados pelo dono do projeto.

### D. Confiança e transparência

Frase curta: os pagamentos são processados pelo PayPal e o site não recolhe nem guarda dados de cartão. Indicar se as doações são voluntárias e se oferecem algum benefício. **Não** afirmar dedutibilidade fiscal sem verificação.

### E. Agradecimento

Estado/página de agradecimento: *"Obrigado por apoiar o projeto. A tua contribuição é muito apreciada."* — mostrar apenas após confirmação fiável do PayPal; caso contrário usar linguagem neutra (*"Obrigado pela visita à nossa página de donativos"*). Botão de regresso ao site principal.

## 4. Requisitos Técnicos

- Responsivo (desktop, tablet, mobile), acessível e navegável por teclado
- Validação e mensagens de erro claras
- Processamento seguro via PayPal; sem armazenamento de dados de cartão
- Sem confirmações falsas; sem recolha desnecessária de dados pessoais
- Título e meta tags SEO-friendly; assets leves e carregamento rápido
- Código reutilizável e manutenível
- Configuração centralizada de conta PayPal, moeda, montantes, nome, logo e URL
- Usar a stack existente do projeto; se for hospedagem estática, implementar a solução estática suportada e documentar qualquer backend mínimo necessário com variáveis de ambiente seguras

## 5. Configuração

- Nome do projeto: `[PROJECT_NAME]`
- Logo: `[LOGO_URL_OR_FILE]`
- Conta PayPal: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`
- Moeda: `EUR`
- Mínimo: `[MINIMUM_AMOUNT]`
- Montantes sugeridos: `[2, 5, 10, 25, 50]`
- URL principal: `[PROJECT_WEBSITE_URL]`
- Contacto: `[CONTACT_EMAIL]`
- Idioma: **pt-PT**

## 6. Critérios de Aceitação

1. Todos os montantes predefinidos são selecionáveis
2. Valor livre válido é aceite
3. Valores inválidos são rejeitados com explicação clara
4. Montante e moeda chegam corretamente ao fluxo oficial do PayPal
5. A conta designada recebe a doação (sujeito à configuração da conta e conclusão da transação)
6. Cancelamento é tratado com elegância
7. Pagamentos bem-sucedidos nunca são reportados falsamente
8. Página funciona em mobile e desktop
9. A conta PayPal muda por configuração, sem redesenho
10. Instruções de setup incluem ligação e teste real (sandbox quando suportado)

## 7. Entregáveis

- Código-fonte completo e funcional
- Página de donativos responsiva
- Integração PayPal real (não maquete visual)
- Instruções de configuração, deploy e testes (sucesso, cancelamento, valores inválidos)
- Lista clara de pré-requisitos/limitações da conta PayPal e de passos que dependem de credenciais ou aprovação do dono do projeto

Antes de implementar, inspecionar a estrutura existente e reutilizar o design system e a stack atuais sempre que possível.
