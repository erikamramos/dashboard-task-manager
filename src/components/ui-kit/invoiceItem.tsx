// components/InvoiceItem.js
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui-kit/button";

const invoices = [
  {
    id: 'F00124',
    amount: 1500,
    isEditable: true,
    isSelected: true,
    isPending: false,
    pendingAmount: 0,
  },
  {
    id: 'F00123',
    amount: 540,
    isEditable: false,
    isSelected: false,
    isPending: false,
    pendingAmount: 0,
  },
  {
    id: 'F00122',
    amount: 1500,
    isEditable: false,
    isSelected: false,
    isPending: true,
    pendingAmount: 300,
  },
];

const InvoiceItem = () => {
  return (
    <div className="space-y-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className={cn(
            'flex items-center justify-between p-4 rounded-md shadow-sm',
            invoice.isSelected ? 'bg-white border' : 'bg-gray-100'
          )}
        >
          <div className="flex items-center space-x-4 w-5/12">
            <input
              type="checkbox"
              checked={invoice.isSelected}
              readOnly
              className={cn(
                'form-checkbox h-5 w-5',
                invoice.isSelected ? 'text-blue-600' : 'text-gray-400'
              )}
            />
            <span className={cn(invoice.isSelected ? 'text-blue-600' : 'text-gray-600')}>
              {invoice.id}
            </span>
          </div>
          <div className={cn('w-4/12')}>
            <span className={cn('text-xl font-semibold', invoice.isSelected ? 'text-black' : 'text-gray-500')}>
              S/{invoice.amount}
            </span>
            {invoice.isPending && (
              <div className="text-sm text-red-500">
                S/{invoice.pendingAmount} pendiente
              </div>
            )}
          </div>
          <div className={cn('w-3/12')}>
            <Button  variant="accent" size="sm">
						{invoice.isEditable ? 'Editar' : 'X'}
					</Button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default InvoiceItem;
