import { useTranslations } from 'next-intl';

export default function TermsConditionsPage() {
  const t = useTranslations('translation.translations.TermsAndConditions');
  console.log(t);
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-8 text-center">
        {t('LastUpdated')}
      </p>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-lg">{t('Introduction.Description')}</p>
      </section>

      {/* Third-Party Responsibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ThirdPartyResponsibility.Title')}
        </h2>
        <p>{t('ThirdPartyResponsibility.Description')}</p>
      </section>

      {/* Our Commitment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('OurCommitment.Title')}
        </h2>
        <p>{t('OurCommitment.Description')}</p>
        <ul className="list-disc pl-6 mt-2">
          {t.raw('OurCommitment.List').map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Participant’s Acknowledgement */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ParticipantAcknowledgement.Title')}
        </h2>
        <p>{t('ParticipantAcknowledgement.Description')}</p>
      </section>

      {/* Resolution and Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ResolutionAndSupport.Title')}
        </h2>
        <p>{t('ResolutionAndSupport.Description')}</p>
      </section>

      {/* Ready For The Adventure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ReadyForTheAdventure.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('ReadyForTheAdventure.Acceptance.Title')}
        </h3>
        <ul className="list-disc pl-6 mb-4">
          {t
            .raw('ReadyForTheAdventure.Acceptance.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{t('ReadyForTheAdventure.Acceptance.Description')}</p>
      </section>

      {/* What We Offer */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('WhatWeOffer.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('WhatWeOffer.TheExperience.Title')}
        </h3>
        <ul className="list-disc pl-6 mb-4">
          {t
            .raw('WhatWeOffer.TheExperience.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{t('WhatWeOffer.TheExperience.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('WhatWeOffer.SafetyAndFlexibility.Title')}
        </h3>
        <ul className="list-disc pl-6">
          {t
            .raw('WhatWeOffer.SafetyAndFlexibility.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </section>

      {/* Who Can Join? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('WhoCanJoin.Title')}</h2>
        <h3 className="text-xl font-medium mb-2">
          {t('WhoCanJoin.TheBasics.Title')}
        </h3>
        <p>{t('WhoCanJoin.TheBasics.Description')}</p>
        <ul className="list-disc pl-6 mt-2 mb-2">
          {t
            .raw('WhoCanJoin.TheBasics.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{t('WhoCanJoin.TheBasics.Note')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('WhoCanJoin.TravelRequirements.Title')}
        </h3>
        <p>{t('WhoCanJoin.TravelRequirements.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('WhoCanJoin.HealthAndWellness.Title')}
        </h3>
        <p>{t('WhoCanJoin.HealthAndWellness.Description')}</p>
        <p className="mt-2">
          {t('WhoCanJoin.HealthAndWellness.InsuranceRequirements.Description')}
        </p>
        <ul className="list-disc pl-6 mt-2 mb-2">
          {t
            .raw('WhoCanJoin.HealthAndWellness.InsuranceRequirements.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{t('WhoCanJoin.HealthAndWellness.InsuranceRequirements.Note')}</p>
      </section>

      {/* Payment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('Payment.Title')}</h2>
        <h3 className="text-xl font-medium mb-2">
          {t('Payment.PaymentTerms.Title')}
        </h3>
        <p>{t('Payment.PaymentTerms.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('Payment.PricingAndAdjustments.Title')}
        </h3>
        <p>{t('Payment.PricingAndAdjustments.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('Payment.NoRetroactiveDiscounts.Title')}
        </h3>
        <p>{t('Payment.NoRetroactiveDiscounts.Description')}</p>
      </section>

      {/* Cancellations & Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('CancellationsAndRefunds.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('CancellationsAndRefunds.HowToCancel.Title')}
        </h3>
        <p>{t('CancellationsAndRefunds.HowToCancel.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('CancellationsAndRefunds.RefundPolicy.Title')}
        </h3>
        <ul className="list-disc pl-6">
          {t
            .raw('CancellationsAndRefunds.RefundPolicy.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('CancellationsAndRefunds.GracePeriod.Title')}
        </h3>
        <p>{t('CancellationsAndRefunds.GracePeriod.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('CancellationsAndRefunds.ImportantConditions.Title')}
        </h3>
        <ul className="list-disc pl-6">
          {t
            .raw('CancellationsAndRefunds.ImportantConditions.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </section>

      {/* Invoices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('Invoices.Title')}</h2>
        <p>{t('Invoices.Description')}</p>
      </section>

      {/* Discounts, Promotions and Incentives */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('DiscountsPromotionsAndIncentives.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('DiscountsPromotionsAndIncentives.HowDiscountsWork.Title')}
        </h3>
        <p>
          {t('DiscountsPromotionsAndIncentives.HowDiscountsWork.Description')}
        </p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t(
            'DiscountsPromotionsAndIncentives.CombiningDiscountsAndIncentives.Title',
          )}
        </h3>
        <p>
          {t(
            'DiscountsPromotionsAndIncentives.CombiningDiscountsAndIncentives.Description',
          )}
        </p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('DiscountsPromotionsAndIncentives.ParticipantIncentives.Title')}
        </h3>
        <p>
          {t(
            'DiscountsPromotionsAndIncentives.ParticipantIncentives.Description',
          )}
        </p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('DiscountsPromotionsAndIncentives.VIURECredit.Title')}
        </h3>
        <p>{t('DiscountsPromotionsAndIncentives.VIURECredit.Description')}</p>
      </section>

      {/* Travel Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('TravelRefunds.Title')}
        </h2>
        <p>{t('TravelRefunds.Description')}</p>
      </section>

      {/* Damage to Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('DamageToProperty.Title')}
        </h2>
        <p>{t('DamageToProperty.Description')}</p>
      </section>

      {/* Sharing a Room */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('SharingARoom.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('SharingARoom.GuestStayPolicy.Title')}
        </h3>
        <p>{t('SharingARoom.GuestStayPolicy.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('SharingARoom.AdditionalParticipant.Title')}
        </h3>
        <p>{t('SharingARoom.AdditionalParticipant.Description')}</p>
      </section>

      {/* Personal Responsibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('PersonalResponsibility.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('PersonalResponsibility.YourHealthSafetyAndSecurity.Title')}
        </h3>
        <p>
          {t('PersonalResponsibility.YourHealthSafetyAndSecurity.Description')}
        </p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('PersonalResponsibility.OurCommitmentToSafety.Title')}
        </h3>
        <p>{t('PersonalResponsibility.OurCommitmentToSafety.Description')}</p>
      </section>

      {/* Photo & Data Permissions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('PhotoAndDataPermissions.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('PhotoAndDataPermissions.MediaRelease.Title')}
        </h3>
        <p>{t('PhotoAndDataPermissions.MediaRelease.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('PhotoAndDataPermissions.ContentUse.Title')}
        </h3>
        <p>{t('PhotoAndDataPermissions.ContentUse.Description')}</p>
      </section>

      {/* Acceptable Behavior */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('AcceptableBehavior.Title')}
        </h2>
        <p>{t('AcceptableBehavior.Description')}</p>
        <ul className="list-disc pl-6 mt-2 mb-2">
          {t
            .raw('AcceptableBehavior.List')
            .map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{t('AcceptableBehavior.Note')}</p>
      </section>

      {/* Force Majeure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ForceMajeure.Title')}
        </h2>
        <p>{t('ForceMajeure.Description')}</p>
      </section>

      {/* Changes to the T&Cs */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ChangesToTheTCs.Title')}
        </h2>
        <p>{t('ChangesToTheTCs.Description')}</p>
      </section>

      {/* Jurisdiction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('Jurisdiction.Title')}
        </h2>
        <p>{t('Jurisdiction.Description')}</p>
      </section>
    </div>
  );
}
