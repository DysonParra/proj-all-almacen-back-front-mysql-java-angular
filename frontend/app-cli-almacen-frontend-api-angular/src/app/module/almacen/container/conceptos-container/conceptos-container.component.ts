/*
 * @overview        {ConceptosContainerComponent}
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
import { ConceptosViewModel } from '../../model/conceptos.model';
import { ConceptosFacade } from '../../facade/conceptos.facade';

/**
 * TODO: Description of {@code ConceptosContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-conceptos-container',
    templateUrl: './conceptos-container.component.html',
    standalone: false,
    styleUrls: ['./conceptos-container.component.css']
})
export class ConceptosContainerComponent extends GenericContainerComponent<ConceptosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConceptosViewModel,
        entityFacade: ConceptosFacade) {
        super(entityInstance, entityFacade);
    }

}
