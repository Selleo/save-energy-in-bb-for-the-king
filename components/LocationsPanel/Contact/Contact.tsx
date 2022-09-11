import { Person } from '../../../pages/api/location.type'
import styles from './Contact.module.scss'

interface ContactProps {
  primaryContact?: Person,
}

export function Contact({ primaryContact }: ContactProps) {
  return primaryContact ? (
    <div className={styles.person}>
      {primaryContact.name}<br />
      Tel.: {primaryContact.phone}<br />
      E-mail: {primaryContact.email}<br />
    </div>
  ) : <>Brak danych kontaktowych</>
}
