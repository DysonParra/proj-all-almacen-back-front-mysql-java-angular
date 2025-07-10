/*
 * @overview        {MmCodigoEquivalenteComponent}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { MmCodigoEquivalenteViewModel } from '../../model/mm-codigo-equivalente.model';

/**
 * TODO: Description of {@code MmCodigoEquivalenteComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mm-codigo-equivalente',
    templateUrl: './mm-codigo-equivalente.component.html',
    standalone: false,
    styleUrls: ['./mm-codigo-equivalente.component.css']
})
export class MmCodigoEquivalenteComponent extends GenericComponent<MmCodigoEquivalenteViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MmCodigoEquivalenteViewModel) {
        super(entityInstance);
    }

}
