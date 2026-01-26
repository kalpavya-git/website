import { RichContent } from "@/data/products";
import {
    Shield, Check, Leaf, Droplet, Activity, Repeat,
    HelpCircle, Star, Award, Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface RichProductContentProps {
    content: RichContent;
}

const RichProductContent = ({ content }: RichProductContentProps) => {
    return (
        <div className="space-y-20 py-10">
            {/* Problem Section */}
            <section className="container mx-auto px-4 max-w-6xl">
                <div className="bg-red-50 border border-red-100 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm">
                    <div className={`p-8 md:p-12 text-left flex-1 ${content.problemSection.problemImage ? 'md:w-1/2' : 'w-full'}`}>
                        <Badge variant="destructive" className="mb-4">Alert</Badge>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-red-900 mb-4">
                            {content.problemSection.title}
                        </h2>
                        <p className="font-sans text-lg text-red-800/80 mb-8 max-w-xl">
                            {content.problemSection.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.problemSection.problems.map((prob, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-red-100 flex items-start gap-3">
                                    <div className="bg-red-100 rounded-full p-1.5 mt-0.5 shrink-0">
                                        <Activity className="w-4 h-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-red-900 text-sm">{prob.title}</h4>
                                        <p className="text-sm text-red-700/70">{prob.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {content.problemSection.problemImage && (
                        <div className="md:w-1/2 relative bg-red-100 min-h-[300px]">
                            <img
                                src={content.problemSection.problemImage}
                                alt="Problem visualization"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent md:bg-gradient-to-l opacity-50"></div>
                        </div>
                    )}
                </div>
            </section>

            {/* Solution Section */}
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto">
                    <div className={`flex-1 text-center md:text-left ${content.solutionSection.solutionImage ? 'md:order-1' : ''}`}>
                        <span className="text-primary font-bold text-sm tracking-widest uppercase">The Solution</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
                            {content.solutionSection.title}
                        </h2>
                        <p className="text-xl font-medium text-primary mb-6">
                            {content.solutionSection.subTitle}
                        </p>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            {content.solutionSection.description}
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {content.solutionSection.features.map((feat, idx) => (
                                <Badge key={idx} variant="secondary" className="px-4 py-1.5 text-sm">
                                    <Check className="w-3.5 h-3.5 mr-1.5 text-primary" />
                                    {feat}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    {content.solutionSection.solutionImage && (
                        <div className="flex-1 w-full md:w-auto">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src={content.solutionSection.solutionImage}
                                    alt="Solution visualization"
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-sm bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/20">
                                    Trusted by thousands of customers
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Mechanism Section */}
            <section className="container mx-auto px-4 bg-secondary/20 py-16 rounded-3xl">
                <h2 className="text-center font-display text-3xl font-bold mb-12">
                    {content.mechanismSection.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.mechanismSection.steps.map((step, idx) => (
                        <Card key={idx} className="border-none shadow-md bg-background/80 backdrop-blur">
                            <CardContent className="pt-6 relative overflow-hidden">
                                <div className="absolute -right-4 -top-4 opacity-5">
                                    {/* Icons placeholder logic could be expanded */}
                                    <Zap className="w-24 h-24" />
                                </div>
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                    {idx === 0 && <Zap className="w-6 h-6" />}
                                    {idx === 1 && <Droplet className="w-6 h-6" />}
                                    {idx === 2 && <Shield className="w-6 h-6" />}
                                    {idx === 3 && <Repeat className="w-6 h-6" />}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Comparison Section */}
            <section className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-center font-display text-3xl font-bold mb-12">
                    {content.comparisonSection.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
                    <div className="bg-red-50/50 p-8 rounded-2xl border border-red-100">
                        <h3 className="text-xl font-bold text-center text-red-900 mb-8">{content.comparisonSection.modernTreatment.title}</h3>
                        <div className="space-y-6">
                            {content.comparisonSection.modernTreatment.points.map((pt, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-red-100 pb-3 last:border-0 last:pb-0">
                                    <span className="font-medium text-red-800/70">{pt.label}</span>
                                    <span className="font-bold text-red-900 text-right">{pt.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-green-50/50 p-8 rounded-2xl border border-green-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            Recommended
                        </div>
                        <h3 className="text-xl font-bold text-center text-green-900 mb-8">{content.comparisonSection.ourProduct.title}</h3>
                        <div className="space-y-6">
                            {content.comparisonSection.ourProduct.points.map((pt, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-green-100 pb-3 last:border-0 last:pb-0">
                                    <span className="font-medium text-green-800/70">{pt.label}</span>
                                    <span className="font-bold text-green-900 text-right">{pt.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Usage Section */}
            <section className="container mx-auto px-4">
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center">
                    <h2 className="font-display text-3xl font-bold mb-12">
                        {content.usageSection.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.usageSection.steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold backdrop-blur-sm border border-white/30">
                                    {idx + 1}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-primary-foreground/80 text-sm mb-3">{step.description}</p>
                                {step.note && (
                                    <span className="inline-block bg-black/20 px-3 py-1 rounded-full text-xs font-medium">
                                        {step.note}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ingredients */}
            <section className="container mx-auto px-4">
                <h2 className="text-center font-display text-3xl font-bold mb-12">
                    {content.ingredientsSection.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {content.ingredientsSection.ingredients.map((ing, idx) => (
                        <div key={idx} className="bg-background border rounded-xl p-6 text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] hover:shadow-lg transition-shadow">
                            <Leaf className="w-8 h-8 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-1">{ing.name}</h3>
                            <p className="text-muted-foreground text-sm">{ing.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Principles Section */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-display text-3xl font-bold mb-4">{content.principlesSection.title}</h2>
                    <p className="text-muted-foreground">{content.principlesSection.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Problems */}
                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100 relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-100 text-red-800 px-4 py-1 rounded-full text-xs font-bold uppercase">Problem</span>
                        <h3 className="text-xl font-bold text-center text-red-900 mb-6">पथरी का मुख्य कारण</h3>
                        <div className="space-y-4">
                            {content.principlesSection.problems.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                                        {idx === 0 && <Activity className="w-5 h-5" />}
                                        {idx === 1 && <Leaf className="w-5 h-5" />}
                                        {idx === 2 && <Shield className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-red-900">{item.title}</h4>
                                        <p className="text-xs text-red-700/70">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100 relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-bold uppercase">Solution</span>
                        <h3 className="text-xl font-bold text-center text-green-900 mb-6">आयुर्वेद का समाधान</h3>
                        <div className="space-y-4">
                            {content.principlesSection.solutions.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        {idx === 0 && <Check className="w-5 h-5" />}
                                        {idx === 1 && <Activity className="w-5 h-5" />}
                                        {idx === 2 && <Droplet className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-900">{item.title}</h4>
                                        <p className="text-xs text-green-700/70">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Features Bar */}
            <section className="bg-primary text-primary-foreground py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium">
                        {content.featuresSection.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4" />
                                {feat}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="container mx-auto px-4 py-8 border-y bg-secondary/10">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {content.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-bold text-sm tracking-wider uppercase">{cert}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-4 bg-muted/30 py-16 rounded-t-3xl">
                <h2 className="text-center font-display text-3xl font-bold mb-12">
                    हमारे संतुष्ट ग्राहकों की सच्ची कहानियां
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {content.testimonials.map((test, idx) => (
                        <Card key={idx} className="border-none shadow-md">
                            <CardContent className="pt-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(test.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{test.content}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-primary">
                                        {test.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{test.name}</h4>
                                        <p className="text-xs text-muted-foreground">{test.location} | Age {test.age}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="container mx-auto px-4 max-w-3xl pb-20">
                <h2 className="text-center font-display text-3xl font-bold mb-8">
                    अक्सर पूछे जाने वाले सवाल
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {content.faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <div className="text-center pb-8 text-xs text-muted-foreground container mx-auto px-4">
                ⚠️ Disclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. Always consult with a qualified healthcare professional before starting any new supplement.
            </div>
        </div>
    );
};

export default RichProductContent;
