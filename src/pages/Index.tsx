import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from '@/components/ui/icon'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Navigation */}
      <nav className="w-full py-6 px-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/3f866894-3579-47bc-bb8a-e5bd77fa6972.jpg" 
              alt="Логотип Академии Дизайна" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-xl font-bold text-primary" style={{fontFamily: 'Playfair Display'}}>
              Академия Дизайна Марианны Турбиной
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#program" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
              Программа
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
              Тарифы
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
              Вопросы
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/10 via-transparent to-gold/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary" style={{fontFamily: 'Playfair Display'}}>
                  Искусственный интеллект для дизайнеров интерьера
                </h1>
                <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed" style={{fontFamily: 'Source Sans Pro'}}>
                  ИИ - уже не будущее! ИИ - это настоящее, которое может кардинально изменить мир и нашу профессию. Мы либо внедряем технологии в работу либо остаемся "догонять уходящий поезд"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl">
                  <Icon name="Sparkles" size={24} className="mr-3" />
                  Записаться на курс
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-2">
                  <Icon name="Play" size={20} className="mr-3" />
                  Смотреть демо
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-6">

                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-gold fill-current" />
                  <span className="text-sm font-medium text-foreground/70" style={{fontFamily: 'Source Sans Pro'}}>
                    Рейтинг 4.9/5
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} className="text-gold" />
                  <span className="text-sm font-medium text-foreground/70" style={{fontFamily: 'Source Sans Pro'}}>
                    Сертификат
                  </span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold to-navy/30 rounded-3xl blur-3xl opacity-30"></div>
              <Card className="relative border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center">
                        <Icon name="Brush" size={28} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary" style={{fontFamily: 'Playfair Display'}}>
                          Модуль 1: Основы ИИ
                        </h3>
                        <p className="text-foreground/70" style={{fontFamily: 'Source Sans Pro'}}>
                          Изучение инструментов генерации
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gold/30 rounded-full flex items-center justify-center">
                        <Icon name="Palette" size={28} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary" style={{fontFamily: 'Playfair Display'}}>
                          Модуль 2: Визуализация
                        </h3>
                        <p className="text-foreground/70" style={{fontFamily: 'Source Sans Pro'}}>
                          Создание реалистичных рендеров
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center">
                        <Icon name="Lightbulb" size={28} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary" style={{fontFamily: 'Playfair Display'}}>
                          Модуль 3: Практика
                        </h3>
                        <p className="text-foreground/70" style={{fontFamily: 'Source Sans Pro'}}>
                          Реальные проекты с экспертами
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section id="program" className="py-20 px-4 bg-gradient-to-r from-accent/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" style={{fontFamily: 'Playfair Display'}}>
              Программа курса
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto" style={{fontFamily: 'Source Sans Pro'}}>
              Экспертная программа обучения, разработанная ведущими специалистами в области ИИ и дизайна интерьера
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Модуль 1: Основы ИИ для дизайна",
                duration: "3 недели",
                topics: ["Настройка VPN и платежных систем", "Настройка ChatGPT для дизайнера. Как написать правильно промт (секретные настройки)", "Создание личного GPT ассистента. Gpt Sora - визуализация за 5 минут", "Midjourney для дизайнера интерьера- как приручить дракона", "PromiAI - твой личный визуализатор"],
                color: "from-primary/20 to-secondary/20"
              },
              {
                icon: "Eye",
                title: "Модуль 2: Практика. Как внедрить ИИ в работу",
                duration: "4 недели", 
                topics: ["Создаем концепцию, moodboard и реалистичные фактурные коллажи", "3D схемы любых чертежей для проекта", "Создание реалистичных визуализаций по промту, коллажу или чертежу без долгих генераций рендеров", "Меняем цвет, расположение или объект в интерьере на другой за 2 минуты"],
                color: "from-secondary/20 to-primary/20"
              },
              {
                icon: "Rocket",
                title: "Модуль 3: БОНУС! Создание личного бренда и вирусного контента для соц.сетей",
                duration: "3 недели",
                topics: ["Создаем логотип", "Создаем своего AI аватара", "Создаем реалистичные вирусные видео на основе ваших визуализаций", "Оживляем интерьер и дарим клиентам ощущение \"присутствия\""],
                color: "from-primary/30 to-secondary/30"
              }
            ].map((module, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${module.color} mb-6`}></div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name={module.icon as any} size={28} className="text-primary" />
                      </div>
                      <div>

                        <h3 className="text-xl font-bold text-primary" style={{fontFamily: 'Playfair Display'}}>
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="text-foreground/80" style={{fontFamily: 'Source Sans Pro'}}>
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" style={{fontFamily: 'Playfair Display'}}>
              Инвестиция в будущее
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto" style={{fontFamily: 'Source Sans Pro'}}>
              Выберите пакет, который подойдет именно вам
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "ДЛЯ САМЫХ БЫСТРЫХ",
                price: "30,000",
                period: "руб.",
                features: ["Для тех, кто уже в сентябре 2025 решится изменить свою жизнь", "2 дня офлайн обучения и полного погружения в мир ИИ", "презентации и файлы с пошаговыми инструкциями и ссылками", "доступ к закрытому ТГ каналу для студентов курса по ИИ"],
                recommended: false
              },
              {
                name: "Для тех, кому нужно подумать", 
                price: "40,000",
                period: "руб. с 1 октября 2025",
                features: ["2 дня офлайн обучения и полного погружения в мир ИИ", "презентации и файлы с пошаговыми инструкциями и ссылками", "доступ к закрытому ТГ каналу для студентов курса по ИИ"],
                recommended: true
              },
              {
                name: "Эксперт",
                price: "129,900", 
                period: "руб.",
                features: ["Все из Профессионального", "1:1 консультации", "Помощь в трудоустройстве", "Безлимитный доступ", "Приоритетная поддержка"],
                recommended: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-500 border-0 ${
                plan.recommended 
                  ? 'bg-gradient-to-br from-primary/5 via-card/80 to-secondary/10 scale-105' 
                  : 'bg-card/50'
              } backdrop-blur-sm`}>

                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2" style={{fontFamily: 'Playfair Display'}}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-primary" style={{fontFamily: 'Playfair Display'}}>
                          {plan.price}
                        </span>
                        <span className="text-lg text-foreground/70" style={{fontFamily: 'Source Sans Pro'}}>
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Icon name="Check" size={16} className="text-gold flex-shrink-0" />
                          <span className="text-foreground/80" style={{fontFamily: 'Source Sans Pro'}}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      size="lg" 
                      className={`w-full py-6 text-lg font-semibold ${
                        plan.recommended 
                          ? 'bg-primary hover:bg-primary/90 shadow-xl' 
                          : 'bg-primary/80 hover:bg-primary'
                      }`}
                    >
                      Выбрать пакет
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-l from-accent/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6" style={{fontFamily: 'Playfair Display'}}>
              Частые вопросы
            </h2>
            <p className="text-xl text-foreground/80" style={{fontFamily: 'Source Sans Pro'}}>
              Ответы на самые популярные вопросы о курсе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Подходит ли курс начинающим дизайнерам?",
                answer: "Курс разработан для дизайнеров интерьера с базовым опытом работы. Мы рекомендуем иметь понимание основ дизайна интерьера перед началом обучения ИИ-технологиям."
              },
              {
                question: "Какое оборудование необходимо?",
                answer: "Для комфортного обучения достаточно современного компьютера с доступом в интернет. Некоторые ИИ-инструменты требуют подписки, но мы предоставим временные доступы для обучения."
              },
              {
                question: "Можно ли проходить курс в своем темпе?",
                answer: "Да, все материалы доступны в записи. Вы можете изучать их в удобном темпе, но для получения максимальной пользы рекомендуем следовать рекомендованному расписанию."
              },
              {
                question: "Предоставляется ли сертификат?",
                answer: "Да, по окончании курса и успешной защите финального проекта вы получите сертификат о прохождении курса, который подтвердит ваши компетенции в области ИИ для дизайна интерьера."
              },
              {
                question: "Есть ли возможность возврата средств?",
                answer: "Да, мы предоставляем 14-дневную гарантию возврата средств. Если курс не оправдает ваших ожиданий в первые две недели, мы вернем полную стоимость."
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary/80 py-6" style={{fontFamily: 'Playfair Display'}}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6 text-base leading-relaxed" style={{fontFamily: 'Source Sans Pro'}}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="text-3xl font-bold text-primary" style={{fontFamily: 'Playfair Display'}}>
                AI Design Academy
              </div>
              <p className="text-foreground/70 max-w-md" style={{fontFamily: 'Source Sans Pro'}}>
                Превратите свою страсть к дизайну интерьера в успешную карьеру с помощью искусственного интеллекта.
              </p>
              <div className="flex space-x-6">
                <Icon name="Mail" size={24} className="text-primary hover:text-primary/80 cursor-pointer" />
                <Icon name="Phone" size={24} className="text-primary hover:text-primary/80 cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-primary hover:text-primary/80 cursor-pointer" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary" style={{fontFamily: 'Playfair Display'}}>
                Курс
              </h4>
              <div className="space-y-2">
                <div className="text-foreground/70 hover:text-primary cursor-pointer transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
                  Программа
                </div>
                <div className="text-foreground/70 hover:text-primary cursor-pointer transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
                  Тарифы
                </div>
                <div className="text-foreground/70 hover:text-primary cursor-pointer transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
                  Отзывы
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary" style={{fontFamily: 'Playfair Display'}}>
                Поддержка
              </h4>
              <div className="space-y-2">
                <div className="text-foreground/70 hover:text-primary cursor-pointer transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
                  Часто задаваемые вопросы
                </div>
                <div className="text-foreground/70 hover:text-primary cursor-pointer transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
                  Техподдержка
                </div>
                <div className="text-foreground/70 hover:text-primary cursor-pointer transition-colors" style={{fontFamily: 'Source Sans Pro'}}>
                  Контакты
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/20 text-center">
            <p className="text-foreground/60" style={{fontFamily: 'Source Sans Pro'}}>
              © 2025 AI Design Academy. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}