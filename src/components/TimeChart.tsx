
import React from 'react';
import { Clock, MessageSquare, Users, ShieldCheck } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, Cell } from 'recharts';

// Data representing time spent on review management (hours per month)
const data = [
  { name: 'Sans Bang', hours: 15, color: '#94a3b8' },
  { name: 'Avec Bang', hours: 1.5, color: '#f97316' }
];

const TimeChart = () => {
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
                  <p className="text-sm text-bang-lightblue">Réduisez de 90% le temps consacré à la gestion des avis</p>
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
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-6 h-[400px]">
            <h3 className="text-xl font-semibold text-center mb-6">Temps consacré à la gestion des avis (heures/mois)</h3>
            <ChartContainer
              config={{
                "Sans Bang": { color: "#94a3b8" },
                "Avec Bang": { color: "#f97316" }
              }}
              className="h-full"
            >
              <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20, top: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 'dataMax']} />
                <YAxis type="category" dataKey="name" width={100} />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-4 border rounded-lg shadow-md">
                          <p className="font-medium">{payload[0].payload.name}</p>
                          <p className="text-sm">
                            <span className="font-semibold">{payload[0].value}</span> heures/mois
                          </p>
                          {payload[0].payload.name === 'Avec Bang' && (
                            <p className="text-sm text-green-600 font-medium">
                              -90% de temps consacré
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
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeChart;
