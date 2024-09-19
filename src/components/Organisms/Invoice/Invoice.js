import {ChevronDown, ChevronUp, Clock, CircleUser} from 'lucide-react';
import React, {useState} from 'react';
import {
  InvoiceCard,
  InvoiceHeader,
  ExpandButton,
  InvoiceDetails,
  ProductItem,
  TotalAmount,
  ProductQuantity,
  ProductName,
  ProductInfo,
  ProductImage,
  ProductPrice,
  ProductTotal, InvoiceHeaderButtons, InvoiceHeaderInfo, StyledItem, Item, InvoiceFooter,
} from './styled';
import Title from '../../Atoms/Title';

export const Invoice = ({invoices}) => {
  const [expandedInvoices, setExpandedInvoices] = useState({});

  const toggleInvoice = (invoiceId) => {
    setExpandedInvoices(prev => ({
      ...prev,
      [invoiceId]: !prev[invoiceId]
    }));
  };

  const formatTimeTo12Hour = (timeString) => {
    const [hour, minutes] = timeString.split(':');
    let hourInt = parseInt(hour, 10);
    const period = hourInt >= 12 ? 'PM' : 'AM';
    hourInt = hourInt % 12 || 12;
    return `${hourInt}:${minutes} ${period}`;
  };
  return (
    <>
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.invoiceId}>
          <InvoiceHeader>
            <InvoiceHeaderInfo>
              <StyledItem>
                <Title size={17}> Factura #{invoice.invoiceId}</Title>
                <Item>
                  <Clock size={20}/>
                  <Title size={17}> {formatTimeTo12Hour(invoice.time)}</Title>
                </Item>
              </StyledItem>
              <Item>
                <CircleUser/>
                <Title size={17} htmlTag={'p'}>{invoice.client}</Title>
              </Item>
            </InvoiceHeaderInfo>
            <InvoiceHeaderButtons>
              <ExpandButton onClick={() => toggleInvoice(invoice.invoiceId)}>
                {expandedInvoices[invoice.invoiceId] ? <ChevronUp /> : <ChevronDown />}
              </ExpandButton>
          </InvoiceHeaderButtons>
          </InvoiceHeader>
          {expandedInvoices[invoice.invoiceId] && (
            <InvoiceDetails>
              {invoice.details.map((detail, index) => (
                <ProductItem key={index}>
                  <ProductImage src={detail.img} alt={detail.product} />
                  <ProductInfo>
                    <ProductName>{detail.product}</ProductName>
                    <Title size={16} size_mobile={16} htmlTag={'p'} lineHeight={20}>Cantidad: {detail.quantity}</Title>
                    {detail.unitPrice && <Title size={16} size_mobile={16}  htmlTag={'p'} lineHeight={20}>Precio unitario: ${detail.unitPrice}</Title>}
                    {detail.totalAmount && <Title size={16} size_mobile={16} htmlTag={'p'} lineHeight={20}>Costo: ${detail.unitCost}</Title>}
                    {detail.totalAmount && <Title size={16} size_mobile={16} htmlTag={'p'} lineHeight={20}>Ganacia: ${detail.unitPrice-detail.unitCost}</Title>}

                  </ProductInfo>
                </ProductItem>
              ))}
            </InvoiceDetails>
          )}
          <InvoiceFooter>
            <Title size={17} size_mobile={17}>Total de la factura: ${invoice.total}</Title>
          </InvoiceFooter>
        </InvoiceCard>
      ))}
    </>
  );
}


export default Invoice;
