'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Label } from './label';
import { Input } from './input';



interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userDetails: { name: string; email: string; phone: string }) => void;
  isLoading: boolean;
}

export function UserDetailsModal({ isOpen, onClose, onSubmit, isLoading }: UserDetailsModalProps) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Vos Informations</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nom Complet</Label>
            <Input
              id="name"
              value={userDetails.name}
              onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userDetails.email}
              onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
              placeholder="votre@email.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              value={userDetails.phone}
              onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+212 6XX XXXXXX"
              required
            />
          </div>
          <div className="flex space-x-4 mt-6">
            <Button
              className="flex-1"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button
              className="flex-1 bg-black text-white hover:bg-gray-800"
              onClick={() => onSubmit(userDetails)}
              disabled={isLoading || !userDetails.name || !userDetails.email || !userDetails.phone}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 