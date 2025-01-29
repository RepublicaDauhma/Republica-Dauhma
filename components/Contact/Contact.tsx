import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

export default function Contact() {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    curso: '',
    faculdade: ''
  });

  const onFinish = (values) => {
    setFormData(values);
    window.open(getWhatsAppUrl(values), '_blank');
  };

  const getWhatsAppUrl = (values) => {
    const baseMessage = `Olá! Me chamo ${values.nome}, tenho ${values.idade} anos, faço ${values.curso} na ${values.faculdade} e gostaria de mais informações sobre a república! =)`;
    const encodedMessage = encodeURIComponent(baseMessage);
    return `https://wa.me/5511971397539?text=${encodedMessage}`;
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: 'Por favor, insira seu nome' }]}
          >
            <Input 
              size="large"
              className="rounded-lg"
              placeholder="Seu nome completo"
            />
          </Form.Item>

          <Form.Item
            label="Idade"
            name="idade"
            rules={[{ required: true, message: 'Por favor, insira sua idade' }]}
          >
            <InputNumber
              size="large"
              className="w-full rounded-lg"
              min={16}
              max={100}
              placeholder="Sua idade"
            />
          </Form.Item>

          <Form.Item
            label="Curso"
            name="curso"
            rules={[{ required: true, message: 'Por favor, insira seu curso' }]}
          >
            <Input
              size="large"
              className="rounded-lg"
              placeholder="Seu curso"
            />
          </Form.Item>

          <Form.Item
            label="Faculdade"
            name="faculdade"
            rules={[{ required: true, message: 'Por favor, insira sua faculdade' }]}
          >
            <Input
              size="large"
              className="rounded-lg"
              placeholder="Sua faculdade"
            />
          </Form.Item>

          <div className="pt-4">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="text-black w-full bg-indigo-400 h-12 hover:bg-indigo-200"
            >
              Entre em contato!
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}