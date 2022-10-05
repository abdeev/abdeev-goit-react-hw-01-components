import React from 'react';
import PropTypes from 'prop-types';
import { generateLightColorHex } from './RandomHEX';
import css from './StatisticsStyles.module.css'


export const Statistics = (title_name, data_stats) => {
    return (
<section className={css.statistics}>
            {title_name && <h2 className={css.title}>{title_name}</h2>}
            <ul className={css.stat_list}>
                {data_stats.map(({ id, label = 'other', percentage = 'no data' }) =>
                    (
                    <li className={css.item}
                        key={id}
                        style={{ backgroundColor: `${generateLightColorHex()}` }}
                    >
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                    )
                )}
            </ul>
</section>
    )
}
Statistics.propTypes = {
        title_name: PropTypes.string,
    data_stats: PropTypes.shape({
        "id": PropTypes.string,
        "label": PropTypes.string,
        "percentage": PropTypes.number
    }).isRequired,
    }