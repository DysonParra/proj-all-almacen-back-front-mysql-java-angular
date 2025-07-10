/*
 * @overview        {MmCodigoEquivalenteContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { MmCodigoEquivalenteViewModel } from '../../model/mm-codigo-equivalente.model';
import { MmCodigoEquivalenteFacade } from '../../facade/mm-codigo-equivalente.facade';

/**
 * TODO: Description of {@code MmCodigoEquivalenteContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mm-codigo-equivalente-container',
    templateUrl: './mm-codigo-equivalente-container.component.html',
    standalone: false,
    styleUrls: ['./mm-codigo-equivalente-container.component.css']
})
export class MmCodigoEquivalenteContainerComponent extends GenericContainerComponent<MmCodigoEquivalenteViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MmCodigoEquivalenteViewModel,
        entityFacade: MmCodigoEquivalenteFacade) {
        super(entityInstance, entityFacade);
    }

}
