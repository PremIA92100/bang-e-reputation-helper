
import React, { useState } from 'react';
import { Clock, MessageSquare, Users, ShieldCheck } from 'lucide-react';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { Slider } from '@/components/ui/slider';
import { useIsMobile } from '@/hooks/use-mobile';

const TimeChart = () => {
  // État pour le temps consacré sans Bang (en heures par mois)
  const [timeWithoutBang, setTimeWithoutBang] = useState<number>(10);
  const isMobile = useIsMobile();
  
  // Calcul du temps avec Bang (5% de réduction)
  const timeWithBang = parseFloat((timeWithoutBang * 0.05).toFixed(1));
  
  // Données pour le graphique, mises à jour en fonction du curseur
  const data = [
    { name: 'Sans Bang', hours: timeWithoutBang, color: '#94a3b8' },
    { name: 'Avec Bang', hours: timeWithBang, color: '#f97316' }
  ];
  
  return (
    <section id="time-savings" className="py-20 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              Libérez-vous d'une gestion <span className="text-bang-orange">chronophage</span>
            </h2>
            
            <p className="text-lg text-bang-lightblue mb-8">
              Chez Bang, nous nous concentrons sur ce qui compte le plus : <span className="font-semibold">votre satisfaction</span>. 
              Notre plateforme autonome prend en charge l'intégralité de la gestion de vos avis client, 
              vous permettant de vous recentrer sur votre cœur de métier.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-bang-lightgray p-3 rounded-full text-bang-orange">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Gain de temps</h3>
                  <p className="text-sm text-bang-lightblue">Réduisez de 95% le temps consacré à la gestion des avis</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-bang-lightgray p-3 rounded-full text-bang-orange">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Réponses optimisées</h3>
                  <p className="text-sm text-bang-lightblue">Des réponses personnalisées qui reflètent votre marque</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-bang-lightgray p-3 rounded-full text-bang-orange">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Support dédié</h3>
                  <p className="text-sm text-bang-lightblue">Disponibilité WhatsApp 7/7 pour adapter vos réponses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-bang-lightgray p-3 rounded-full text-bang-orange">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Produit Prem'IA</h3>
                  <p className="text-sm text-bang-lightblue">Expertise et technologie au service de votre réputation</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center">
              <div className="text-red-600 font-bold mr-2">★</div>
              <p className="text-bang-blue font-medium">100% <span className="text-[#ea384c] font-bold">SATISFAIT OU REMBOURSÉ</span> - Aucun engagement</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Temps consacré à la gestion des avis
              <br />(heures/mois)
            </h3>
            
            <div className="h-64 w-full mb-6">
              <ChartContainer
                config={{
                  "Sans Bang": { color: "#94a3b8" },
                  "Avec Bang": { color: "#f97316" }
                }}
                className="h-full w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={data} 
                    layout="vertical" 
                    margin={{ left: isMobile ? 40 : 60, right: 10, top: 10, bottom: 10 }}
                    barGap={4}
                    maxBarSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis 
                      type="number" 
                      domain={[0, 15]} 
                      ticks={[0, 5, 10, 15]} 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={isMobile ? 65 : 80}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <ChartTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-white p-3 border rounded-lg shadow-md">
                              <p className="font-medium">{payload[0].payload.name}</p>
                              <p className="text-sm">
                                <span className="font-semibold">{payload[0].value}</span> heures/mois
                              </p>
                              {payload[0].payload.name === 'Avec Bang' && (
                                <p className="text-sm text-green-600 font-medium">
                                  -95% de temps consacré
                                </p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="hours" barSize={40} radius={[4, 4, 4, 4]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="space-y-4 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Ajustez le temps consacré sans Bang:</span>
                <span className="text-xl font-semibold text-bang-orange">{timeWithoutBang} {timeWithoutBang === 1 ? 'heure' : 'heures'}</span>
              </div>
              
              <div className="px-1">
                <Slider
                  value={[timeWithoutBang]}
                  min={0.5}
                  max={15}
                  step={0.5}
                  onValueChange={(value) => setTimeWithoutBang(value[0])}
                  className="cursor-pointer"
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 px-0.5">
                <span>30min</span>
                <span>15h</span>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 mt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-bang-blue">
                      Avec Bang: seulement <span className="text-green-600 font-semibold text-lg">{timeWithBang} {timeWithBang === 1 ? 'heure' : 'heures'}/mois</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Soit un gain de temps de 95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeChart;
