import React, { useState, useEffect, useRef } from 'react';
import './StockDeals.css';
import { AiOutlineStock } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdPerson } from "react-icons/io";

const StockDeals = ({ language }) => {
  const [counts, setCounts] = useState({
    deals: 0,
    amount: 0,
    success: 0,
    experts: 0
  });

  const targetCounts = {
    deals: 1200,
    amount: 350,
    success: 85,
    experts: 25
  };

  const duration = 2000; // Animation duration in ms
  const componentRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
          // Add visible class for other animations
          entry.target.classList.add('in-view');
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px' // Trigger when 30% visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        deals: Math.floor(progress * targetCounts.deals),
        amount: Math.floor(progress * targetCounts.amount),
        success: Math.floor(progress * targetCounts.success),
        experts: Math.floor(progress * targetCounts.experts)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      }
    };

    requestAnimationFrame(updateCounts);
  };

  const dataItems = [
    {
      icon: <AiOutlineStock className="stat-icon" />,
      value: `${counts.deals.toLocaleString()}+`,
      label: language ? 'صفقات الأسهم المنفذة' : 'Stock Deals Executed'
    },
    {
      icon: <LiaCertificateSolid className="stat-icon" />,
      value: `$${counts.amount}M`,
      label: language ? 'إجمالي القيمة' : 'Total Deal Value'
    },
    {
      icon: <BsCurrencyDollar className="stat-icon" />,
      value: `${counts.success}%`,
      label: language ? 'معدل النجاح' : 'Success Rate'
    },
    {
      icon: <IoMdPerson className="stat-icon" />,
      value: `${counts.experts}+`,
      label: language ? 'خبراء متخصصين' : 'Expert Team Members'
    }
  ];

  return (
    <div className={`stock-deals ${language ? 'rtl' : 'ltr'}`} ref={componentRef}>
      <div className="stock-deals-head">
        <h2>{language ? 'صفقات الأسهم في أرقام' : 'Stock Deals in Numbers'}</h2>
        <p>
          {language 
            ? 'استفد من خبرتنا لتحقيق أقصى عوائد من خلال صفقات الأسهم الماهرة. مؤشرات أدائنا تتحدث عن نفسها.' 
            : 'Harness our expertise to maximize returns with expertly executed stock deals. Our performance metrics speak for themselves.'}
        </p>
      </div>
      
      <div className="stats-grid">
        {dataItems.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon-container">
              {item.icon}
            </div>
            <h3 className="stat-value">{item.value}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockDeals;