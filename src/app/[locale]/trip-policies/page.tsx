'use client';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function TripPolicies() {
  const t = useTranslations('TripAndExpeditionsPolicies');

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('Title')}</h1>
      <p className="text-lg mb-8">{t('Introduction.Description')}</p>

      {/* Accommodations & Travel */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('AccommodationsAndTravel.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('AccommodationsAndTravel.Accommodation.Title')}
        </h3>
        <p>{t('AccommodationsAndTravel.Accommodation.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('AccommodationsAndTravel.Flights.Title')}
        </h3>
        <p>{t('AccommodationsAndTravel.Flights.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('AccommodationsAndTravel.Luggage.Title')}
        </h3>
        <p>{t('AccommodationsAndTravel.Luggage.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('AccommodationsAndTravel.Pets.Title')}
        </h3>
        <p>{t('AccommodationsAndTravel.Pets.Description')}</p>
      </section>

      {/* Responsibilities & Safety */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ResponsibilitiesAndSafety.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('ResponsibilitiesAndSafety.PersonalResponsibility.Title')}
        </h3>
        <p>
          {t('ResponsibilitiesAndSafety.PersonalResponsibility.Description')}
        </p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('ResponsibilitiesAndSafety.Damages.Title')}
        </h3>
        <p>{t('ResponsibilitiesAndSafety.Damages.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('ResponsibilitiesAndSafety.HealthAndSafety.Title')}
        </h3>
        <p>{t('ResponsibilitiesAndSafety.HealthAndSafety.Description')}</p>
      </section>

      {/* Workspaces & Behavior */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('WorkspacesAndBehavior.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('WorkspacesAndBehavior.WorkspaceEtiquette.Title')}
        </h3>
        <p>{t('WorkspacesAndBehavior.WorkspaceEtiquette.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('WorkspacesAndBehavior.Security.Title')}
        </h3>
        <p>{t('WorkspacesAndBehavior.Security.Description')}</p>
      </section>

      {/* Age & Special Requests */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('AgeAndSpecialRequests.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('AgeAndSpecialRequests.AgeRequirement.Title')}
        </h3>
        <p>{t('AgeAndSpecialRequests.AgeRequirement.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('AgeAndSpecialRequests.SpecialRequests.Title')}
        </h3>
        <p>{t('AgeAndSpecialRequests.SpecialRequests.Description')}</p>
      </section>

      {/* Legal & Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('LegalAndLiability.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('LegalAndLiability.IllegalActivity.Title')}
        </h3>
        <p>{t('LegalAndLiability.IllegalActivity.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('LegalAndLiability.TravelDocuments.Title')}
        </h3>
        <p>{t('LegalAndLiability.TravelDocuments.Description')}</p>
      </section>

      {/* Shared Accommodation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('SharedAccommodation.Title')}
        </h2>
        <h3 className="text-xl font-medium mb-2">
          {t('SharedAccommodation.SharingRooms.Title')}
        </h3>
        <p>{t('SharedAccommodation.SharingRooms.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('SharedAccommodation.RoomAssignments.Title')}
        </h3>
        <p>{t('SharedAccommodation.RoomAssignments.Description')}</p>
        <h3 className="text-xl font-medium mb-2 mt-4">
          {t('SharedAccommodation.HealthRisks.Title')}
        </h3>
        <p>{t('SharedAccommodation.HealthRisks.Description')}</p>
      </section>

      {/* Housing Promise */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('HousingPromise.Title')}
        </h2>
        <p>{t('HousingPromise.Description')}</p>
        <ul className="list-disc pl-6 mt-2">
          {t.raw('HousingPromise.List').map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* VIURE as Intermediary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('NOMATRIBEAsIntermediary.Title')}
        </h2>
        <p>{t('NOMATRIBEAsIntermediary.Description')}</p>
      </section>

      {/* Contact & Questions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('ContactAndQuestions.Title')}
        </h2>
        <p>{t('ContactAndQuestions.Description')}</p>
      </section>
    </div>
  );
}
