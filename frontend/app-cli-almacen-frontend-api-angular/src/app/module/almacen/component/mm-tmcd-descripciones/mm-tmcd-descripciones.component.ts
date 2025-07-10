/*
 * @overview        {MmTmcdDescripcionesComponent}
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
import { MmTmcdDescripcionesViewModel } from '../../model/mm-tmcd-descripciones.model';

/**
 * TODO: Description of {@code MmTmcdDescripcionesComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mm-tmcd-descripciones',
    templateUrl: './mm-tmcd-descripciones.component.html',
    standalone: false,
    styleUrls: ['./mm-tmcd-descripciones.component.css']
})
export class MmTmcdDescripcionesComponent extends GenericComponent<MmTmcdDescripcionesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MmTmcdDescripcionesViewModel) {
        super(entityInstance);
    }

}
